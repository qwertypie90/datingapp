// array of friends
var matches = [];
// constructor creating the Friend object and the addfriend function
var Friend = function(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;

    this.addFriend = function(x, y, z) {
        matches.push(new Friend(x, y, z));
    };
};

// pre-made friends
var ahmed = new Friend("Ahmed", "https://i.imgflip.com/1dg2tf.jpg", [2,2,3,4,5,1,3,5,5,5]);
var spunky = new Friend("SPUNKY", "https://hips.hearstapps.com/cos.h-cdn.co/assets/cm/14/25/53a04e63ede00_-_cos-daniel-tosh-xl.jpg", [1,1,1,1,1,1,2,1,5,5]);
var liverfieldz = new Friend("LiverfieldZz", "http://www.desitvbox4.com/wp-content/uploads/2017/10/ZEE-TV-Sa-Re-Ga-Ma-Pa-Li%E2%80%99l-Champs-500x500_c.jpg", [5,1,3,4,5,1,2,3,4,1]);

matches.push(ahmed, spunky, liverfieldz)


module.exports = matches;