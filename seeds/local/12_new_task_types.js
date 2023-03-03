'use strict';

exports.seed = async knex => {
  await knex('task_types').insert([
    {
      'due_by': '1 hours',
      'call_required': false,
      'active': true,
      'created_at': knex.raw('NOW()'),
      'updated_at': knex.raw('NOW()'),
      'hardcoded_id': 'VALIDATE_EMAIL',
      'name': 'Validate Email',
      'icon': 'search',
    },
    {
      'due_by': '1 hours',
      'call_required': false,
      'active': true,
      'created_at': knex.raw('NOW()'),
      'updated_at': knex.raw('NOW()'),
      'hardcoded_id': 'VALIDATE_EMAIL_MANAGER',
      'name': 'Validate Email Manager',
      'icon': 'search',
    }
  ]);
};
