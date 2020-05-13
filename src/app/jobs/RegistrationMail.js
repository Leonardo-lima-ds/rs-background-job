import Mail from '../lib/Queue';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;
        await Mail.sendMail({
            from: 'Queue Teste <teste@queue.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo ao sistema de filas de teste :D`
        });
    }
}