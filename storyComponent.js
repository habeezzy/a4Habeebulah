(function() {
  function storyController() {
    controller: "storyController as ctrl",
    template: `

  <ng-view></ng-view>

    `
  };
  angular
  .module("StoryApp")
  .component("storyComponent", storyComponent);
})();
