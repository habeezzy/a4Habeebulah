(function() {
  function StoryService() {
    var getWords = {};
    return {
      getWords: getWords,
      setWords: setWords
    };

  function getWords() {
    return input;
  };
  function setWords() {
    input = newInfo,

)};



angular
.module("StoryApp")
.service("StoryService", StoryService)
.controller("formController", formController)
.controller("storyController", storyController)
})();
