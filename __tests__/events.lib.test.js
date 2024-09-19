import getEvents from "../lib/getEvents";

describe("Events - lib", () => {
  it("should return an array of events", async () => {
    const events = await getEvents();
    expect(events.length).toEqual(6);
  });
});
