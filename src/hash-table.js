export default class HashTable {
  constructor() {
    this.array = [];
  }

  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }

  set(key, value) {
    const index = this.hash(key); //checks the hash of the key
    if (this.array[index] === undefined) { //if the array at that index is undefined, we set it to an empty array so we can then push the new key value pair into it
      this.array[index] = []
    }
    this.array[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key); // checks the hash of the key
    const bucket = this.array[index]; //determins which bucket to look in (makes things easier to understand)
    if (bucket !== undefined) { //if bucket is undefined it won't run through the loop, will just return null. This is when bucket has no values or doesn't match the value we want
      for (let i = 0; i < bucket.length; i++) { // Loops thorough key value pairs until we find the correct key and returns the value. Each bucket is an array of arrays so we need to check the first index of each array to see if it matches the key we're looking for hence the [i][0]
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key); 
    const bucket = this.array[index]; 
    if (bucket !== undefined) { 
      for (let i = 0; i < bucket.length; i++) { 
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return "removed pair";

          //or can do 
          // bucket[i][1] = null;
          // return "removed pair";
        }
      }
    }
    return null;
  }
}