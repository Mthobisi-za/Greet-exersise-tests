
describe('Greet Exercise', () => {
    it('Should collect username input', () => {
        var func = makeChanges();
        assert.equal("mtho", func.setUserName("Mtho"));
    });
    it('Should return an error message for wrong iputs such as number and space', () => {
        var func = makeChanges();
        assert.equal("Please input text that has alphabetic values only.", func.setUserName("Mtho2333"));
    });
    it("Should be able to collect the language for Isizulu", () => {
        var func = makeChanges();
        func.setUserName("Mtho");
        assert.equal("Saw'bona", func.setUserLang("Isizulu"));
    });
    it("Should be able to collect the language for English", () => {
        var func = makeChanges();
        func.setUserName("Mtho");
        assert.equal("Hello", func.setUserLang("English"));
    });
    it("Should be able to collect the language for Sesostho", () => {
            var func = makeChanges();
            func.setUserName("Mtho");
            assert.equal("Dumela", func.setUserLang("Sesotho"));
        })
   
    it("should be able to recognize that the name Jack already exist", () => {
        var func = makeChanges();
        func.setUserName("Jack");
        func.setUserLang("Isizulu");
        func.storeNames();
        func.setUserName("Jack");
        func.setUserLang("Isizulu");
        assert.equal(func.storeNames(), "already exist");
    });
    it("should be able to get the number of greeted people", () => {
        var func = makeChanges();
        func.setUserName("Bean");
        func.setUserLang("Isizulu");
        func.storeNames();
        func.setUserName("Mthobisi");
        func.setUserLang("English");
        func.storeNames()
        func.setUserName("Mbazo");
        func.setUserLang("Sesotho");
        func.storeNames()
        func.setUserName("Nduduzo");
        func.setUserLang("English");
        func.storeNames()
        assert.equal(func.getCounter(), 5);
    });
    it("should be able to reset the number of greeted people", () => {
        var func = makeChanges();
        func.setUserName("Bean");
        func.setUserLang("Isizulu");
        func.storeNames();
        func.setUserName("Mthobisi");
        func.setUserLang("English");
        func.storeNames()
        func.setUserName("Mbazo");
        func.setUserLang("Sesotho");
        func.storeNames()
        func.setUserName("Nduduzo");
        func.setUserLang("English");
        func.storeNames()
        assert.equal(func.resetData(), null);
    });
});
