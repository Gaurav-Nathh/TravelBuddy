export const posts = async (req, res) => {
  console.log("Post Controller");
  return res.status(400).json({name: "Gaurav", destinaton: "Delhi"});
}