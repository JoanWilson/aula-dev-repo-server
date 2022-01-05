class HelloController {
    async index(req, res) {
        return res.json({ hello:'Com MongoDB' });
    }
}

export default new HelloController();