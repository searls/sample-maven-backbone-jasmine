describe("App1: Creating friends", function () {
	it("should add new friends", function () {
		loadFixtures('app1.html');
		var f = new Friend;
		//var friendApp = new AppView;
		$("#first-name").val("tim");
		$("form").submit();
		expect($("#friends-list li").length).toEqual(1);
	});
});