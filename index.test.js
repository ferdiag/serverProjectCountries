const request = require("supertest");
const app = require("./index"); // Importiere die App, nicht den Server
const connectDatabase = require("./utils/connect.js");
const updateLeaderboard = require("./controllers/Leaderboard.js");

jest.mock("./helpers/connect.js");
jest.mock("./controllers/Leaderboard.js");

describe("POST /getAndUpdateLeaderboard", () => {
  let dbMock;
  let collectionMock;

  beforeEach(() => {
    collectionMock = {
      find: jest.fn().mockReturnValue({
        toArray: jest.fn().mockResolvedValue([
          { name: "Alice", points: 9000 },
          { name: "Bob", points: 8500 },
        ]),
      }),
    };

    dbMock = {
      collection: jest.fn().mockReturnValue(collectionMock),
    };

    connectDatabase.mockResolvedValue(dbMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the leaderboard and not have an error if the update is successful", async () => {
    const newEntry = { name: "Ferhat", points: 8000 };
    updateLeaderboard.mockResolvedValue(null); // Simuliere einen erfolgreichen Eintrag

    const response = await request(app)
      .post("/getAndUpdateLeaderboard")
      .send(newEntry)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(connectDatabase).toHaveBeenCalled();
    expect(dbMock.collection).toHaveBeenCalledWith("highscore");
    expect(collectionMock.find).toHaveBeenCalled();
    expect(response.body.leaderboard).toEqual([
      { name: "Alice", points: 9000 },
      { name: "Bob", points: 8500 },
    ]);
    expect(response.body.err).toBe(false);
  });

  it("should return an error if the update fails", async () => {
    const newEntry = { name: "Ferhat", points: 8000 };
    updateLeaderboard.mockResolvedValue(newEntry.name); // Simuliere einen fehlerhaften Eintrag

    const response = await request(app)
      .post("/getAndUpdateLeaderboard")
      .send(newEntry)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body.err).toBe(
      "Es gab leider einen Fehler beim updaten der Datenbank"
    );
  });

  it("should return a 500 error if the database connection fails", async () => {
    connectDatabase.mockResolvedValue(null); // Simuliere eine fehlgeschlagene Datenbankverbindung

    const response = await request(app)
      .post("/getAndUpdateLeaderboard")
      .send({ name: "Ferhat", points: 8000 })
      .expect(500);

    expect(response.text).toBe("Verbindung zur Datenbank gescheitert");
  });

  it("should return a 500 error if there is a database error during the find operation", async () => {
    collectionMock.find.mockReturnValue({
      toArray: jest
        .fn()
        .mockRejectedValue(new Error("Fehler in der Datenbank")),
    });

    const response = await request(app)
      .post("/getAndUpdateLeaderboard")
      .send({ name: "Ferhat", points: 9000 })
      .expect(500);

    expect(response.text).toBe("Fehler in der Datenbank");
  });
});
