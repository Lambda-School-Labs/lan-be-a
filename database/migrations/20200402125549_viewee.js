exports.up = (knex, Promise) => {
	return knex.schema
		.createTable('users', table => {
            table.increments();
            table.string('google_id')
                .unique();
            table.string('facebook_id')
                .unique();
            table.string('twitter_id')
                .unique();
			table.string('email')
				.notNullable()
				.unique();
			table.string('display_name')
				.index();
			table.string('profile_picture');
			table.string('password');
			table.string('track');
			table.integer('likes')
				.defaultTo(0);
			table.timestamps(true, true);
		})
		.createTable('posts', table => {
			table.increments();
			table.integer('user_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.string('question')
				.notNullable()
				.index();
			table.text('answer')
				.notNullable()
				.index();
			table.integer('likes')
				.defaultTo(0);
			table.integer('comments')
				.defaultTo(0);
			table.string('track')
				.notNullable()
				.index();
			table.string('category')
				.notNullable()
				.index();
			table.timestamps(true, true);
		})
		.createTable('comments', table => {
			table.increments();
			table.integer('user_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.integer('post_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('posts')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.text('comment')
				.notNullable();
			table.integer('thumbs_up')
				.defaultTo(0);
			table.timestamps(true, true);
		})
		.createTable('liked_posts', table => {
			table.integer('user_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.integer('post_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('posts')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		})
		.createTable('liked_comments', table => {
			table.integer('user_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.integer('comment_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('comments')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		})
};

exports.down = (knex, Promise) => {
	return knex.schema
		.dropTableIfExists('liked_comments')
		.dropTableIfExists('liked_posts')
		.dropTableIfExists('comments')
		.dropTableIfExists('posts')
		.dropTableIfExists('users');
};