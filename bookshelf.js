var knex = require('knex')({
	client: 'mysql',
	connection: {
		host: 'itp460.usc.edu',
		user: 'student',
		password: 'ttrojan',
		database: 'itp405-midterm',
		charset: 'utf8'
	}
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;