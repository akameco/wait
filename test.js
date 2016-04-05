import test from 'ava';
import fn from './';

test('wait', async t => {
	t.pass(await fn(100));
});
