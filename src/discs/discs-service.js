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
};

module.exports = DiscsService;