const DiscsService = {
    insertDisc(db, disc) {
        return db
            .insert(disc)
            .into('discs')
            .returning('*')
            .then(rows => {
                return rows[0];
            });
    },

    getUserDiscs(db, id) {
        return db
            .select('*')
            .from('discs as disc')
            .where('disc.user_id', id)
    },

    getById (db, id) {
        return db
            .select('*')
            .from('discs as disc')
            .where('disc.id', id)
    },
};

module.exports = DiscsService;