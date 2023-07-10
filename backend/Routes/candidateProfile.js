const express = require('express');

const router = express.Router();

router.route('/candidateProfileForm')
.post((req,res) => {
    try {
        console.log("Data Received: ",req.body);
        res.status(200);
        res.json({"Data Received: ":req.body ,task:"form submission",success : true});
    }
    catch(error) { 
        console.log(error);
        res.send({error:error.message ,task:"form submission", success:false});
    }
    }
);

module.exports = router;