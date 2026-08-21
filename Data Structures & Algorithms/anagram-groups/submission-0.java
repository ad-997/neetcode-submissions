
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // HashMap
        // e.g {
        // "ABC": ["BCA", "CBA"]
        // "DEC": ["CED", "DCE"]

        Map<String, List<String>> map = new HashMap<>();

        // Iterate over strs array
        for(String str : strs) {
            // convert the str to charArray (B,C,A), (A,C,B)
            char[] chr = str.toCharArray();
            // sort that CharArray (A,B,C), (A,B,C)
            Arrays.sort(chr);
            // convert it to a string (ABC), (ABC)
            String key = String.valueOf(chr);

            // check if map.containsKey() (ABC) ABC->Contains->True
            if (!map.containsKey(key)) {
                // if not (ABC, [])
                map.put(key, new ArrayList<>());
            }
            //add itself to map (BCA, ["ABC", ])
            // add (ABC, ["BCA", "ACB"])
            map.get(key).add(str);
        }
        // // get only the values from map and which is List of String and store it in ArrayList
        return new ArrayList<>(map.values());
    }
}