test("a basic test example", function(assert) {
  assert.ok( true, "this test is fine" );
  var value = "hello";
  assert.equal( value, "hello", "We expect value to be hello" );
});

module("Module A");

test("first test within module", function(assert) {
  assert.ok( true, "all pass" );
});

test("second test within module", function(assert) {
  assert.ok( true, "all pass" );
});

module("Module B");

test("some other test", function(assert) {
  expect(2);
  assert.equal( true, false, "failing test" );
  assert.equal( true, true, "passing test" );
});
