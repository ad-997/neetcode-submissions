public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }

        Dictionary<char, int> map = new Dictionary<char, int>();

        for (int i = 0; i < s.Length; i++) {
            map[s[i]] = map.GetValueOrDefault(s[i], 0) + 1;
        }

        for (int i = 0; i < t.Length; i++) {
            if (!map.ContainsKey(t[i])) {
                return false;
            } else {
                int count = map[t[i]];
                if (count == 1) {
                    map.Remove(t[i]);
                } else {
                    map[t[i]] = count - 1;
                }
            }
        }

        return true;
    }
}
