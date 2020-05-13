import Queue from '../lib/Queue';

export default {
    async store(req, res) {
        await console.log(req.body);

        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        await Queue.add('RegistrationNail', { user });

        return res.json(user);
    }
}