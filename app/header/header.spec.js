System.register(["angular2/testing", "./header.component"], function(exports_1) {
    var testing_1, header_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            testing_1.describe("Typewriting header tests", function () {
                var tcb;
                testing_1.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcBuilder) {
                    tcb = tcBuilder;
                }));
                testing_1.it("should have one h1", testing_1.injectAsync([], function () {
                    return tcb.createAsync(header_component_1.HeaderComponent)
                        .then(function (fixture) {
                        fixture.detectChanges();
                        var element = fixture.nativeElement;
                        testing_1.expect(element.querySelectorAll("h1").length).toEqual(1);
                    });
                }));
                testing_1.it("should have a title", testing_1.injectAsync([], function () {
                    return tcb.createAsync(header_component_1.HeaderComponent)
                        .then(function (fixture) {
                        var headerCmp = fixture.componentInstance;
                        headerCmp.title = "Test title";
                        fixture.detectChanges();
                        var element = fixture.nativeElement;
                        testing_1.expect(element.querySelector("h1")).toHaveText("Test title");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=header.spec.js.map