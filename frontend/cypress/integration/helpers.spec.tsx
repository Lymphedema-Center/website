import { filterProps, computeAspectRatio } from "../../components/helpers";

describe("filterProps helper", function() {
  const goodProps = {
    one: true,
    two: "foo",
    three: "bar",
    four: false
  };

  it("filters out single key", function() {
    // define bad props
    const badProps = { bad: false };

    // filter
    const filteredProps = filterProps({ ...goodProps, ...badProps }, ["bad"]);

    // make sure keys are missing
    expect(filteredProps).to.not.have.any.keys("bad");
    expect(filteredProps).to.have.keys(Object.keys(goodProps));
  });

  it("filters out multiple keys", function() {
    // define bad props
    const badProps = { bad1: false, bad2: "carrot", some_other: 123 };

    // filter
    const filteredProps = filterProps({ ...goodProps, ...badProps }, [
      "bad1",
      "bad2",
      "some_other"
    ]);

    // assert "bad1", "bad2", "some_other" are not prop keys
    expect(filteredProps).to.not.have.any.keys("bad1", "bad2", "some_other");
    expect(filteredProps).to.have.keys(Object.keys(goodProps));
  });
});

describe("computeAspectRatio helper", function() {
  it("should work with valid pixel strings", function() {
    // normal
    expect(computeAspectRatio("1px", 3 / 4)).to.equal("0.75px");
    expect(computeAspectRatio("25px", 1 / 5)).to.equal("5px");

    // with da trimmings
    expect(computeAspectRatio(" 1px ", 3 / 4)).to.equal("0.75px");

    // space between
    expect(computeAspectRatio("25   px", 1 / 5)).to.equal("5px");
  });

  it("should fail with invalid pixel string", function() {
    // no dimension
    const noDimension = "1";
    expect(function() {
      computeAspectRatio(noDimension, 3 / 4);
    }).to.throw(
      `'dimension' must be a valid css 'height' or 'width' string, got ${noDimension}`
    );

    // incorrect dimension
    const incorrectDimension = "1carrot";
    expect(function() {
      computeAspectRatio(incorrectDimension, 3 / 4);
    }).to.throw(
      `'dimension' must be a valid css 'height' or 'width' string, got ${noDimension}`
    );
  });
});
