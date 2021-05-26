describe("TestService", () => {
  let service: TestService;

  beforeEach(() => {
    service = new TestService();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should do stuff", () => {
    expect(service.doStuff).not.toThrow();
  });
});
