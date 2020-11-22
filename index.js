module.exports = (str) => {
    var nameParts = str.split("@");
    var name = nameParts[0]
    var name = name.toLowerCase()
    var name = name.replace(/\./g, "");

    return name
}
