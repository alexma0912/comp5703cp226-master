// router.get('/')

const app = require('../app');

const request = require('supertest')(app);
// Assertion test library
const assert = require('power-assert');

describe('# test all api', function () {
	// In asynchronous, done is executed after the asynchronous end
	it('GET /', function (done) {
		request
			.get('/') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});

	it('GET /users/', function (done) {
		request
			.get('/users/') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});


	it('GET /api/bitfinex-usd-day', function (done) {
		request
			.get('/api/bitfinex-usd-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});


	it('GET /api/bitfinex-jpy-day', function (done) {
		request
			.get('/api/bitfinex-jpy-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});

	it('GET /api/bitfinex-eur-day', function (done) {
		request
			.get('/api/bitfinex-eur-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});


	it('GET /api/coinbase-usd-day', function (done) {
		request
			.get('/api/coinbase-usd-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});

	it('GET /api/coinbase-eur-day', function (done) {
		request
			.get('/api/coinbase-eur-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});


	it('GET /api/bitflyer-jpy-day', function (done) {
		request
			.get('/api/bitflyer-jpy-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});


	it('GET /api/all-usd-day', function (done) {
		request
			.get('/api/all-usd-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});




	it('GET /api/all-eur-day', function (done) {
		request
			.get('/api/all-eur-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});


	it('GET /api/all-jpy-day', function (done) {
		request
			.get('/api/all-jpy-day') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});



	it('GET /api/all-usd-volume', function (done) {
		request
			.get('/api/all-usd-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});




	it('GET /api/all-eur-volume', function (done) {
		request
			.get('/api/all-eur-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});




	it('GET /api/usd-volume', function (done) {
		request
			.get('/api/usd-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});



	it('GET /api/eur-volume', function (done) {
		request
			.get('/api/eur-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});




	it('GET /api/jpy-volume', function (done) {
		request
			.get('/api/jpy-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});





	it('GET /api/bitfinex-volume', function (done) {
		request
			.get('/api/bitfinex-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});


	it('GET /api/coinbase-volume', function (done) {
		request
			.get('/api/coinbase-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});



	it('GET /api/bitflyer-volume', function (done) {
		request
			.get('/api/bitflyer-volume') // API address
			.expect(200) // Judgment status code
			.end(function (err, res) { // Get the returned data after the request ends
				console.log(res.body)
				if (err) 
					return done(err);
				return done();
			});
	});

});
