cloudinary.imageTag('actor.headshot', {transformation: [
        {width: 173, height: 200, crop: "fill"},
        {overlay: new cloudinary.Layer().publicId("hexagon_sample"), flags: "cutter"}
    ]}).toHtml();