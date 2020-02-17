# Dotify-mongo-node-ts
### Convert JSON object in Request.Body to dotified object to store in mongodb

    public Update(Req: Request, Res: Response, Next: NextFunction) {
        const Entries = Object.keys(Req.body)
        const Updates = {}

        // constructing dynamic query

        for (let i = 0; i < Entries.length; i++) {
            Updates[Entries[i]] = Object.values(Req.body)[i]
        }

        let DotifiedUpdates = Dotify.dotify(Updates);
        Organisation.updateOne({ companyId: Req.body.companyId }, { $set: DotifiedUpdates }).exec().then(success => {

            // console.log(success);
            Res.send(success);
        })
            .catch(err => Res.status(500).json({ message: err.name }));
    }
