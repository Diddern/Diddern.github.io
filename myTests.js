function myFirstTest(){
	var game = MyGame;
  var actual = game.init(2,3);
  var expected = 5;
  MyTestFramework.assertThat(actual, expected);
}

function checkInnerSquareXSize(){
var actual = MyGame.squareX;
var expected = 0;
MyTestFramework.assertThat(actual, expected);
}

function checkInnerSquareYSize(){
var actual = MyGame.squareY;
var expected = 0;
MyTestFramework.assertThat(actual, expected);
}

function checkInnerSquareHSize(){
var actual = MyGame.squareH;
var expected = 15;
MyTestFramework.assertThat(actual, expected);
}

function checkInnerSquareWSize(){
var actual = MyGame.squareH;
var expected = 15;
MyTestFramework.assertThat(actual, expected);
}

function makeSquare (){
	return;
}

(function(){
  myFirstTest();
  checkInnerSquareXSize();
  checkInnerSquareYSize();
  checkInnerSquareHSize();
  checkInnerSquareWSize();

  //all test names goes here
})();
