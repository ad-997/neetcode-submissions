class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        
        // HashMap for counting the freqs
        HashMap<Integer, Integer> map = new HashMap<>();

        // min heap (priority queue min heap by default)

        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> map.get(a) - map.get(b));

        // actual arr to store ans
        int[] ans = new int[k];

        // freq count
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
        }

        // 
        for (int num: map.keySet()) {
            pq.add(num);
            if (pq.size() > k) {
                pq.poll();
            }
        }

        for (int i = 0; i < k; i++) {
            ans[i] = pq.poll();
        }
        return ans;
    }
}
// h        p
// A->B->C->D->D->E
// p.val = p.next.val;
// p.next = p.next.next;



