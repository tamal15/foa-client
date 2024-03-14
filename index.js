const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://fnabd.biz"],
  })
);
app.use(express.json());

const uri =
  "mongodb+srv://foadata:roBZiRKNJ68qhM7W@cluster0.mdvmm9t.mongodb.net/?retryWrites=true&w=majority";
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const homeCollection = client.db("foaDatabase").collection("home");
    const homebannerCollection = client
      .db("foaDatabase")
      .collection("homebanner");
    const provideSolutionCollection = client
      .db("foaDatabase")
      .collection("providesolution");
    const homeaboutusCollection = client
      .db("foaDatabase")
      .collection("homeAboutus");
    const facehomeCollection = client
      .db("foaDatabase")
      .collection("facehomedata");
    const choosedataCollection = client
      .db("foaDatabase")
      .collection("choosedata");
    const testimonialCollection = client
      .db("foaDatabase")
      .collection("home_testimonial");
    const getinTouchCollection = client
      .db("foaDatabase")
      .collection("home_getintouch");
    const blogCollection = client.db("foaDatabase").collection("home_blog");
    const footerCollection = client.db("foaDatabase").collection("Footer");
    const blogdataCollection = client.db("foaDatabase").collection("blog");
    const contactCollection = client.db("foaDatabase").collection("contact");

    const servicebannerCollection = client
      .db("foaDatabase")
      .collection("service_banner");
    const processServiceCollection = client
      .db("foaDatabase")
      .collection("service_processService");
    const servicedesignToolCollection = client
      .db("foaDatabase")
      .collection("service_designTools");
    const servicePartnerCollection = client
      .db("foaDatabase")
      .collection("service_partner");
    const serviceQuestionCollection = client
      .db("foaDatabase")
      .collection("service_question");
    const serviceprovideCollection = client
      .db("foaDatabase")
      .collection("service_provide");

    app.post("/addbanner", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await homebannerCollection.insertOne(user);
      res.json(result);
    });

    app.post("/addProvideSolution", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await provideSolutionCollection.insertOne(user);
      res.json(result);
    });

    app.post("/addhomeaboutus", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await homeaboutusCollection.insertOne(user);
      res.json(result);
    });
    app.post("/facehome", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await facehomeCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addChoosedata", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await choosedataCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addTestimonial", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await testimonialCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addgetintouch", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await getinTouchCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addBlog", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await blogCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addFooter", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await footerCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addServiceBanner", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await servicebannerCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addProcessService", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await processServiceCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addServiceDesignTool", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await servicedesignToolCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addservicepartner", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await servicePartnerCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addservicequestion", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await serviceQuestionCollection.insertOne(user);
      res.json(result);
    });
    app.post("/addserviceprovide", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await serviceprovideCollection.insertOne(user);
      res.json(result);
    });

    // get banner
    app.get("/getbanner", async (req, res) => {
      const result = await homebannerCollection.find({}).toArray();
      res.json(result);
    });
    // get addProvideSolution
    app.get("/getprovidesolution", async (req, res) => {
      const result = await provideSolutionCollection.find({}).toArray();
      res.json(result);
    });
    // get addProvideSolution
    app.get("/gethomeaboutus", async (req, res) => {
      const result = await homeaboutusCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getfacehome", async (req, res) => {
      const result = await facehomeCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getchoose", async (req, res) => {
      const result = await choosedataCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/gettestimonial", async (req, res) => {
      const result = await testimonialCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getintouch", async (req, res) => {
      const result = await getinTouchCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getblog", async (req, res) => {
      const result = await blogCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getFooter", async (req, res) => {
      const result = await footerCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getserviceBanner", async (req, res) => {
      const result = await servicebannerCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getProcessService", async (req, res) => {
      const result = await processServiceCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getdesignservicetool", async (req, res) => {
      const result = await servicedesignToolCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getservicepartner", async (req, res) => {
      const result = await servicePartnerCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getservicequestion", async (req, res) => {
      const result = await serviceQuestionCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getserviceprovide", async (req, res) => {
      const result = await serviceprovideCollection.find({}).toArray();
      res.json(result);
    });
    // get facehome
    app.get("/getservicehomedata", async (req, res) => {
      const result = await homeCollection.find({}).toArray();
      res.json(result);
    });

    // update
    app.get("/editbanner/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await homebannerCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editprovide/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await provideSolutionCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editHomeAboutus/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await homeaboutusCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editFaceHome/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await facehomeCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editChoose/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await choosedataCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editTestimonial/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await testimonialCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editGetintouch/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await getinTouchCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editBlogs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await blogCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editFooters/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await footerCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editservicebanner/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await servicebannerCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editProcessService/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await processServiceCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editdesignTool/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await servicedesignToolCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editservicepartner/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await servicePartnerCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editservicequestion/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await serviceQuestionCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/editserviceprovide/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await serviceprovideCollection.findOne(query);
      res.json(user);
    });
    // update
    app.get("/serviceprovidesdata/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await serviceprovideCollection.findOne(query);
      res.json(user);
    });

    app.put("/bannerupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          OurServicesHomeText: updateUser.OurServicesHomeText,
          
        },
      };
      const result = await homebannerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/bannerfeaturesupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          thumbnailFirstWord: updateUser.thumbnailFirstWord,
          otherWord: updateUser.otherWord,
          
        },
      };
      const result = await homebannerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });

    app.put("/bannerimagesupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          image1: updateUser.image1,
        },
      };
      const result = await homebannerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/bannerfeaturesimagesupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          image2: updateUser.image2,
        },
      };
      const result = await homebannerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/provideupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          contentSectionText: updateUser.contentSectionText,
          thumbnailText: updateUser.thumbnailText,
          CardServiceText: updateUser.CardServiceText,
        },
      };
      const result = await provideSolutionCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/homeaboutusupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          thumbnailText: updateUser.thumbnailText,
          titlesText: updateUser.titlesText,
          detailsText: updateUser.detailsText,
          ButtonsText: updateUser.ButtonsText,
        },
      };
      const result = await homeaboutusCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/homeaboutuslistupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          AboutUsHomeListPointText: updateUser.AboutUsHomeListPointText,
          
        },
      };
      const result = await homeaboutusCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/faceHomeupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          contentSectionFaceHomeText: updateUser.contentSectionFaceHomeText,
          thumbnailFaceHomeText: updateUser.thumbnailFaceHomeText,
          titlesFaceHomeText: updateUser.titlesFaceHomeText,
          detailsFaceHomeText: updateUser.detailsFaceHomeText,
          ButtonsFaceHomeText: updateUser.ButtonsFaceHomeText,
          CardOneNumber: updateUser.CardOneNumber,
          CardOneText: updateUser.CardOneText,
        },
      };
      const result = await facehomeCollection.updateOne(filter,updateDoc,options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/chooseupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          thumbnailWhyChoseUSText: updateUser.thumbnailWhyChoseUSText,
          titlesWhyChoseUSText: updateUser.titlesWhyChoseUSText,
          detailsWhyChoseUSText: updateUser.detailsWhyChoseUSText,
         
        },
      };
      const result = await choosedataCollection.updateOne(filter,updateDoc,options);
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/choosefeaturesimageupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          image1: updateUser.image1,
         
         
        },
      };
      const result = await choosedataCollection.updateOne(filter,updateDoc,options);
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/choosefeaturesupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          CardWhyChoseUSHeadingText: updateUser.CardWhyChoseUSHeadingText,
          CardWhyChoseUSParaText: updateUser.CardWhyChoseUSParaText,
         
         
        },
      };
      const result = await choosedataCollection.updateOne(filter,updateDoc,options);
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/testimonialupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
         
          
          review: updateUser.review,
          name: updateUser.name,
          designation: updateUser.designation,
        },
      };
      const result = await testimonialCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/testimonialimageupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
        
          image1: updateUser.image1,
         
        },
      };
      const result = await testimonialCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/getintouchupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          GetInTouchThumbnailText: updateUser.GetInTouchThumbnailText,
          GetInTouchDetails: updateUser.GetInTouchDetails,
          ContactInfoCardTitles: updateUser.ContactInfoCardTitles,
          ContactInfoCardDetails: updateUser.ContactInfoCardDetails,
        
        },
      };
      const result = await getinTouchCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/getintouchimageupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          image1: updateUser.image1,
        },
      };
      const result = await getinTouchCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/blogsupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          BlogHomeContentSectionText: updateUser.BlogHomeContentSectionText,
          BlogHomeThumbnailText: updateUser.BlogHomeThumbnailText,
          BlogHomeCardHeading: updateUser.BlogHomeCardHeading,
          BlogHomeCardDetails: updateUser.BlogHomeCardDetails,
        },
      };
      const result = await blogCollection.updateOne(filter, updateDoc, options);
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/footerupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          footerDecription: updateUser.footerDecription,
          LinkTittle: updateUser.LinkTittle,
          LinkTittleName: updateUser.LinkTittleName,
          LinkTittleNameUrl: updateUser.LinkTittleNameUrl,
          servicetittle: updateUser.servicetittle,
          servicetittleName: updateUser.servicetittleName,
          serviceTittleNameUrl: updateUser.serviceTittleNameUrl,
          contactTittle: updateUser.contactTittle,
          contactmailtittle: updateUser.contactmailtittle,
          contactmailaddress: updateUser.contactmailaddress,
          helptittle: updateUser.helptittle,
          helpmail: updateUser.helpmail,
          addresstittle: updateUser.addresstittle,
          fulladdress: updateUser.fulladdress,
          tittleNewsletter: updateUser.tittleNewsletter,
        },
      };
      const result = await footerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });

    // service banner
    app.put("/servicebannerupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          tittle1: updateUser.tittle1,
          tittle2: updateUser.tittle2,
          details: updateUser.details,
        },
      };
      const result = await servicebannerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/servicebannerimageupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          image1: updateUser.image1,
        },
      };
      const result = await servicebannerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/processServiceupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          tittle1: updateUser.tittle1,
          details: updateUser.details,
          processtittleone: updateUser.processtittleone,
          processdetailsone: updateUser.processdetailsone,
          processtittletwo: updateUser.processtittletwo,
          processdetailstwo: updateUser.processdetailstwo,
          processtittlethree: updateUser.processtittlethree,
          processdetailsthree: updateUser.processdetailsthree,
          processtittleFour: updateUser.processtittleFour,
          processdetailsFour: updateUser.processdetailsFour,
        },
      };
      const result = await processServiceCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/designToolupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          tittle1: updateUser.tittle1,
          tittle2: updateUser.tittle2,
          details: updateUser.details,
          featuresTittle: updateUser.featuresTittle,
          featuresOne: updateUser.featuresOne,
          featuresDetailsOne: updateUser.featuresDetailsOne,
          featuresTwo: updateUser.featuresTwo,
          featuresDetailsTwo: updateUser.featuresDetailsTwo,
          featuresThree: updateUser.featuresThree,
          featuresDetailsThree: updateUser.featuresDetailsThree,
          featuresFour: updateUser.featuresFour,
          featuresDetailsFour: updateUser.featuresDetailsFour,
        },
      };
      const result = await servicedesignToolCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/partnerupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          tittle1: updateUser.tittle1,
          tittle2: updateUser.tittle2,
        },
      };
      const result = await servicePartnerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/partnerimageupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          image1: updateUser.image1,
          
        },
      };
      const result = await servicePartnerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/questionupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          tittle1: updateUser.tittle1,
          tittle2: updateUser.tittle2,
          question: updateUser.question,
          answer: updateUser.answer,
        },
      };
      const result = await serviceQuestionCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/questionimageupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          image1: updateUser.image1,
        },
      };
      const result = await serviceQuestionCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });
    app.put("/serviceprovideupdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          optimizationAllServiceTitleOne: updateUser.optimizationAllServiceTitleOne,
          optimizationAllServiceTitleTwo: updateUser.optimizationAllServiceTitleTwo,
          optimizationAllServiceTitleThree: updateUser.optimizationAllServiceTitleThree,
          optimizationAllServiceDetail: updateUser.optimizationAllServiceDetail,
          type: updateUser.type,
          serviceprovidenameone: updateUser.serviceprovidenameone,
          serviceprovidenametwo: updateUser.serviceprovidenametwo,
          serviceprovidenamethree: updateUser.serviceprovidenamethree,
          serviceprovidenameFour: updateUser.serviceprovidenameFour,
        },
      };
      const result = await serviceprovideCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("uodateinf", id);
      res.json(result);
    });

    // delete
    app.delete("/bannersdelete/:id", async (req, res) => {
      const result = await homebannerCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/deleteHomeaboutus/:id", async (req, res) => {
      const result = await homeaboutusCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/deleteHomeChoose/:id", async (req, res) => {
      const result = await choosedataCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/provideDelete/:id", async (req, res) => {
      const result = await provideSolutionCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/facehomeDelete/:id", async (req, res) => {
      const result = await facehomeCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/testimonialDelete/:id", async (req, res) => {
      const result = await testimonialCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/getintouchDelete/:id", async (req, res) => {
      const result = await getinTouchCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/blogsDelete/:id", async (req, res) => {
      const result = await blogCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/footerDelete/:id", async (req, res) => {
      const result = await footerCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/servicebannerDelete/:id", async (req, res) => {
      const result = await servicebannerCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/designtoolDelete/:id", async (req, res) => {
      const result = await servicedesignToolCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/partnerDelete/:id", async (req, res) => {
      const result = await servicePartnerCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/questionDelete/:id", async (req, res) => {
      const result = await serviceQuestionCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });
    // delete
    app.delete("/serviceprovideDelete/:id", async (req, res) => {
      const result = await serviceprovideCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.json(result);
    });

    // posted products
    app.post("/blog", async (req, res) => {
      const products = req.body;
      console.log(products);
      const result = await blogdataCollection.insertOne(products);
      res.send(result);
    });

    app.get("/blog", async (req, res) => {
      const result = await blogdataCollection.find({}).toArray();
      res.json(result);
    });

    // PUT request to update a document in the 'blog' collection
    app.put("/blog/:id", async (req, res) => {
      const { id } = req.params; // Extract the id from the request params
      const {
        image_link,
        type,
        type_color,
        title,
        blog_image,
        description,
        publisher_image,
        publisher_name,
        publisher_time,
        publisher_date,
      } = req.body; // Extract updated fields from the request body
      try {
        const result = await blogdataCollection.updateOne(
          { _id: new ObjectId(id) }, // Use new ObjectId() to create ObjectId instance
          {
            $set: {
              image_link: image_link,
              type: type,
              type_color: type_color,
              title: title,
              blog_image: blog_image,
              description: description,
              publisher_image: publisher_image,
              publisher_name: publisher_name,
              publisher_time: publisher_time,
              publisher_date: publisher_date,
            },
          } // Update the fields with the new values
        );
        res.json(result);
      } catch (error) {
        console.error("Error updating document:", error);
        res.status(500).json({ error: "Error updating document" });
      }
    });
    // blog
    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const result = await blogdataCollection.findOne({
        _id: new ObjectId(id),
      });
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Blog post not found" });
      }
    });

    // posted products
    app.post("/contact", async (req, res) => {
      const products = req.body;
      console.log(products);
      const result = await contactCollection.insertOne(products);
      res.send(result);
    });

    app.get("/contact", async (req, res) => {
      const result = await contactCollection.find({}).toArray();
      res.json(result);
    });

    // PUT request to update a document in the 'contact' collection
    app.put("/contact/:id", async (req, res) => {
      const { id } = req.params; // Extract the id from the request params
      const { text } = req.body; // Extract the updated text from the request body
      try {
        const result = await contactCollection.updateOne(
          { _id: new ObjectId(id) }, // Use new ObjectId() to create ObjectId instance
          { $set: { text: text } } // Update the 'text' field with the new text
        );
        res.json(result);
      } catch (error) {
        console.error("Error updating document:", error);
        res.status(500).json({ error: "Error updating document" });
      }
    });

    //! About Code Start
    //! About Banner
    const aboutBannerCollection = client
      .db("foaDatabase")
      .collection("about_banner");

    app.put("/updateAboutBanner", async (req, res) => {
      try {
        const body = await req.body;
        console.log(body.id);
        console.log(body.data);
        const result = await aboutBannerCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    app.get("/getAboutBanner", async (req, res) => {
      const result = await aboutBannerCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.get("/test", async (req, res) => {
      // const result = await aboutBannerCollection.find({}).toArray();
      res.json({ success: true, result: "Akib" });
    });
    //! About Mission
    const aboutMissionCollection = client
      .db("foaDatabase")
      .collection("about_mission");
    app.get("/getAboutMission", async (req, res) => {
      const result = await aboutMissionCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.put("/updateAboutMission", async (req, res) => {
      try {
        const body = await req.body;
        const result = await aboutMissionCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    //! About Vision
    const aboutVisionCollection = client
      .db("foaDatabase")
      .collection("about_vision");
    app.get("/getAboutVision", async (req, res) => {
      const result = await aboutVisionCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.put("/updateAboutVision", async (req, res) => {
      try {
        const body = await req.body;
        const result = await aboutVisionCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        console.log(body);
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    //! About Value
    const aboutValueCollection = client
      .db("foaDatabase")
      .collection("about_value");
    app.get("/getAboutValue", async (req, res) => {
      const result = await aboutValueCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.put("/updateAboutValue", async (req, res) => {
      try {
        const body = await req.body;
        const result = await aboutValueCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        console.log(body);
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    //! About Starter
    const aboutStarterCollection = client
      .db("foaDatabase")
      .collection("about_starter");
    app.get("/getAboutStarter", async (req, res) => {
      const result = await aboutStarterCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.put("/updateAboutStarter", async (req, res) => {
      try {
        const body = await req.body;
        const result = await aboutStarterCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        console.log(body);
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    //! About Team
    const aboutTeamCollection = client
      .db("foaDatabase")
      .collection("about_team");
    app.get("/getAboutTeam", async (req, res) => {
      const result = await aboutTeamCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.get("/getAboutTeamMember", async (req, res) => {
      const { _id } = req.query;
      console.log(_id);
      const result = await aboutTeamCollection.findOne({
        _id: new ObjectId(_id),
      });
      res.json({ success: true, member: result });
    });
    app.delete("/deleteAboutTeamMember", async (req, res) => {
      try {
        const { _id } = req.query;
        const result = await aboutTeamCollection.deleteOne({
          _id: new ObjectId(_id),
        });
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    app.post("/addAboutTeamMember", async (req, res) => {
      try {
        const data = await req.body;
        const response = await aboutTeamCollection.insertOne(data);
        res.json({ success: true, addedData: response });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    app.put("/updateAboutTeamMember", async (req, res) => {
      try {
        const body = await req.body;
        const result = await aboutTeamCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });

    //! About Delivered
    const aboutDeliveredCollection = client
      .db("foaDatabase")
      .collection("about_delivered");
    app.get("/getAboutDelivered", async (req, res) => {
      const result = await aboutDeliveredCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.put("/updateAboutDeliveredData", async (req, res) => {
      try {
        const body = await req.body;
        const result = await aboutDeliveredCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });

    //! About Timeline
    const aboutTimelineCollection = client
      .db("foaDatabase")
      .collection("about_timeline");

    app.get("/getAboutTimeLine", async (req, res) => {
      const result = await aboutTimelineCollection.find({}).toArray();
      res.json({ success: true, result });
    });
    app.post("/addAboutTimeLineData", async (req, res) => {
      try {
        const data = await req.body;
        const result = await aboutTimelineCollection.insertOne(data);
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });

    app.put("/updateAboutTimeLineData", async (req, res) => {
      try {
        const body = await req.body;
        const result = await aboutTimelineCollection.findOneAndReplace(
          { _id: new ObjectId(body.id) },
          body.data
        );
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    app.delete("/deleteAboutTimeLineData", async (req, res) => {
      try {
        const { _id } = req.query;
        const result = await aboutTimelineCollection.deleteOne({
          _id: new ObjectId(_id),
        });
        res.json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.json({ success: false, error });
      }
    });
    //!about Code End--------------------------------------------------

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("All server is running");
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
