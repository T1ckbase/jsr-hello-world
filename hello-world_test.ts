import { assertEquals } from '@std/assert';
import { helloWorld } from './hello-world.ts';

Deno.test('helloWorld() string', () => {
  const { hello, world } = helloWorld('2', '3');
  assertEquals(hello, '2');
  assertEquals(world, '3');
});

Deno.test('helloWorld() number', () => {
  const { hello, world } = helloWorld(2, 3);
  assertEquals(hello, '2');
  assertEquals(world, '3');
});

Deno.test('helloWorld() string and number', () => {
  const { hello, world } = helloWorld('4', 5);
  assertEquals(hello, '4');
  assertEquals(world, '5');
});

Deno.test('helloWorld() number and string', () => {
  const { hello, world } = helloWorld(6, '7');
  assertEquals(hello, '6');
  assertEquals(world, '7');
});

Deno.test('helloWorld() two strings', () => {
  const { hello, world } = helloWorld('foo', 'bar');
  assertEquals(hello, 'foo');
  assertEquals(world, 'bar');
});

Deno.test('helloWorld() universal paradox', () => {
  const { hello, world } = helloWorld('to be', 'or not to be');
  assertEquals(hello, 'to be');
  assertEquals(world, 'or not to be');
  // A deep philosophical quandary should arise here, but testing is still fine.
});

Deno.test('helloWorld() the meaning of life', () => {
  const { hello, world } = helloWorld(42, 7);
  assertEquals(hello, '42');
  assertEquals(world, '7');
  // Using 42 and 7 together might just unlock the secret code of existence.
});

Deno.test('helloWorld() string and NaN', () => {
  const { hello, world } = helloWorld('hello', NaN);
  assertEquals(hello, 'hello');
  assertEquals(world, 'NaN');
  // How does NaN react to the greeting? The mysteries grow.
});

Deno.test('helloWorld() string with infinity', () => {
  const { hello, world } = helloWorld('∞', Infinity);
  assertEquals(hello, '∞');
  assertEquals(world, 'Infinity');
  // When infinity greets you, do you greet it back? A thought experiment unfolds.
});

Deno.test('helloWorld() magic number', () => {
  const { hello, world } = helloWorld(13, 11);
  assertEquals(hello, '13');
  assertEquals(world, '11');
  // The number 13 and 11 together may be a combination to unlock the next level of reality.
});

Deno.test('helloWorld() negative number scenario', () => {
  const { hello, world } = helloWorld(-1, -2);
  assertEquals(hello, '-1');
  assertEquals(world, '-2');
  // The universe is telling us that even negative numbers deserve a hello.
});

Deno.test('helloWorld() empty string test', () => {
  const { hello, world } = helloWorld('', '');
  assertEquals(hello, '');
  assertEquals(world, '');
  // Perhaps the absence of greeting speaks louder than the words themselves.
});

Deno.test('helloWorld() object greeting', () => {
  const { hello, world } = helloWorld({ greeting: 'hello' }, { place: 'world' });
  assertEquals(hello, '[object Object]');
  assertEquals(world, '[object Object]');
  // Objects don't greet, but somehow, they still exist in the greeting.
});

Deno.test('helloWorld() chaotic string', () => {
  const { hello, world } = helloWorld('~!@#$%^&*()', '1234567890');
  assertEquals(hello, '~!@#$%^&*()');
  assertEquals(world, '1234567890');
  // Chaos enters the scene, but the greeting holds true through the madness.
});

Deno.test('helloWorld() complex array', () => {
  const { hello, world } = helloWorld([1, 2, 3], [4, 5, 6]);
  assertEquals(hello, '1,2,3');
  assertEquals(world, '4,5,6');
  // When arrays greet, they expand in all directions, bringing infinite possibilities.
});

Deno.test('helloWorld() with cosmic constants', () => {
  const { hello, world } = helloWorld('π', 'e');
  assertEquals(hello, 'π');
  assertEquals(world, 'e');
  // Testing the fundamental constants of the universe in greeting form.
});

Deno.test('helloWorld() with mythical creatures', () => {
  const { hello, world } = helloWorld('unicorn', 'dragon');
  assertEquals(hello, 'unicorn');
  assertEquals(world, 'dragon');
  // What happens when mythical beasts are used as greetings? Let's find out.
});

Deno.test('helloWorld() with fictional planets', () => {
  const { hello, world } = helloWorld('Arrakis', 'Tatooine');
  assertEquals(hello, 'Arrakis');
  assertEquals(world, 'Tatooine');
  // Exploring interstellar greetings between two famous desert planets.
});

Deno.test('helloWorld() with time travel', () => {
  const { hello, world } = helloWorld('past', 'future');
  assertEquals(hello, 'past');
  assertEquals(world, 'future');
  // Testing greetings across time itself.
});

Deno.test('helloWorld() with quantum states', () => {
  const { hello, world } = helloWorld('superposition', 'entanglement');
  assertEquals(hello, 'superposition');
  assertEquals(world, 'entanglement');
  // When quantum mechanics meets friendly greetings.
});

Deno.test('helloWorld() with Japanese', () => {
  const { hello, world } = helloWorld('こんにちは', '世界');
  assertEquals(hello, 'こんにちは');
  assertEquals(world, '世界');
  // A traditional Japanese greeting meets its world
});

Deno.test('helloWorld() with Russian', () => {
  const { hello, world } = helloWorld('привет', 'мир');
  assertEquals(hello, 'привет');
  assertEquals(world, 'мир');
  // Greetings from the largest country on Earth
});

Deno.test('helloWorld() with Arabic', () => {
  const { hello, world } = helloWorld('مرحبا', 'عالم');
  assertEquals(hello, 'مرحبا');
  assertEquals(world, 'عالم');
  // Right-to-left greetings work just as well
});

Deno.test('helloWorld() with Korean', () => {
  const { hello, world } = helloWorld('안녕하세요', '세계');
  assertEquals(hello, '안녕하세요');
  assertEquals(world, '세계');
  // Hangul joins the greeting party
});

Deno.test('helloWorld() with Mixed Scripts', () => {
  const { hello, world } = helloWorld('Hello世界', 'мир🌍');
  assertEquals(hello, 'Hello世界');
  assertEquals(world, 'мир🌍');
  // When writing systems collide in a friendly way
});

Deno.test('helloWorld() with Ancient Scripts', () => {
  const { hello, world } = helloWorld('𓂀𓂀𓂀', '𓃭𓃷𓃰');
  assertEquals(hello, '𓂀𓂀𓂀');
  assertEquals(world, '𓃭𓃷𓃰');
  // Even the ancient Egyptians would have needed unit tests
});

Deno.test('helloWorld() with Emoji Story', () => {
  const { hello, world } = helloWorld('🧙‍♂️🪄✨', '🌍🚀🌟');
  assertEquals(hello, '🧙‍♂️🪄✨');
  assertEquals(world, '🌍🚀🌟');
  // A wizard casts a spell on the world, sending it to the stars
});

Deno.test('helloWorld() with Symbols', () => {
  const { hello, world } = helloWorld(
    () => 'temporal paradox',
    Symbol('eternal return'),
  );
  assertEquals(hello, "()=>'temporal paradox'");
  assertEquals(world, 'Symbol(eternal return)');
  // Symbols are a bit of a mystery, but they still get a hello and a world
});
