// describe : 테스트 코드를 분야별로 묶을 때 사용하는
describe(".to~ test", () => {
  // describe 내에 여러 개의 it를 만들 수 있다.
  it("37 to equal 37", () => {
    // 37을 기대하는데, 실제 받은 것은 3이다. => failed
    expect(37).toBe(3);
  });

  it("37 to equal 37", () => {
    // 37을 기대하는데, 실제 받은 것은 37이다. => passed
    expect(37).toBe(37);
  });

  it("{age : 39} to equal {age : 39}", () => {
    // failed인 이유 : 객체인 경우에 레퍼런스 값을 비교하기 때문에 모습은 같지만 다른 곳을 바라보기 때문에
    // 37을           toBe 가 아니라 toEqual 을 사용해야 한다.
    expect({ age: 39 }).toBe({ age: 39 });
  });

  it("{age : 39} to equal {age : 39}", () => {
    // toEqual 을 사용해서 passed
    expect({ age: 39 }).toEqual({ age: 39 });
  });

  // 문자열의 길이를 비교
  it(".toHaveLength", () => {
    expect("Hello").toHaveLength(5);
  });

  // 프로퍼티가 있는지, 프로퍼티에 있는 실제 값이 맞는지 테스트
  it(".toHaveProperty", () => {
    expect({ name: "Mark" }).toHaveProperty("name");
    expect({ name: "Mark" }).toHaveProperty("name", "Mark");
  });

  // 값이 undefined가 아닌가 테스트
  it(".toBeDefined", () => {
    expect({ name: "Mark" }.name).toBeDefined();
  });

  // 값이 Falsy한 값인지 테스트
  it(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  // 숫자 비교
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });

  // 숫자 비교
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });

  // 어떤 것에 인스턴스인가에 대한 테스트
  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});

// .not 을 붙여서 의도를 담아서 테스트 가능
describe(".not.to~ test", () => {
  it(".not.toBeFalsy", () => {
    expect(true).not.toBeFalsy();
  });
});

// async test with async-await
// 비동기적인 로직에 의해 나온 결과물을 테스트
describe("use async test", () => {
  it("async-await", async () => {
    function p() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    const data = await p();
    return expect(data).toBe(37);
  });

  it("async-await, catch", async () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("error"));
        }, 1000);
      });
    }
    try {
      await p();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
