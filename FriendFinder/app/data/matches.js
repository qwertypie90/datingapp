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
var ahmed = new Friend("Ahmed", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", [5,1,4,4,5,1,2,5,4,1]);
var spunky = new Friend("SPUNKY", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", [5,1,4,4,5,1,2,5,4,1]);
var liverfieldz = new Friend("LiverfieldZz", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", [5,1,4,4,5,1,2,5,4,1]);

matches.push(ahmed, spunky, liverfieldz)


module.exports = matches;