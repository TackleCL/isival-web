// src/mixins/imageupload.js
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../firebase";


export default {
  methods: {
    imageUpload(file) {

      if (file) {

        const folder = this.$store.state.companyId

        // storage 
        const storageRef = ref(storage, `${folder}/webform/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // promise
        return new Promise((resolve, reject) => {
          uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.debug(progress)

            switch (snapshot.state) {
              case "paused":
                console.debug("Upload is paused");
                break;
              case "running":
                console.debug("Upload is running");
                break;
            }
          },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        })

      }

    },
  },
}