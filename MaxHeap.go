type Item struct {
	val int
	idx int
}

type MaxHeap struct {
	array []Item
}

func NewMaxHeap() *MaxHeap {
	return &MaxHeap{
		array: []Item{},
	}
}

func (h *MaxHeap) Insert(value, index int) {
	h.array = append(h.array, Item{val: value, idx: index})
	h.heapifyUp(h.len() - 1)
}

func (h *MaxHeap) Extract() (Item, error) {
	if h.isEmpty() {
		return Item{}, fmt.Errorf("heap is empty")
	}

	max := h.array[0]

	lastIndex := h.len() - 1
	h.array[0] = h.array[lastIndex]
	h.array = h.array[:lastIndex]

	h.heapifyDown(0)

	return max, nil
}

func (h *MaxHeap) heapifyUp(index int) {
	for index > 0 && h.array[parent(index)].val < h.array[index].val {
		h.swap(parent(index), index)
		index = parent(index)
	}
}

func (h *MaxHeap) heapifyDown(index int) {
	l, r := left(index), right(index)
	lastIndex := h.len() - 1

	childToSwap := 0
	for l <= lastIndex {
		if l == lastIndex {
			childToSwap = lastIndex
		} else if h.array[l].val > h.array[r].val {
			childToSwap = l
		} else {
			childToSwap = r
		}

		if h.array[index].val < h.array[childToSwap].val {
			h.swap(index, childToSwap)
			index = childToSwap
			l, r = left(index), right(index)
		} else {
			return
		}
	}
}

func (h *MaxHeap) swap(i1, i2 int) {
	h.array[i1], h.array[i2] = h.array[i2], h.array[i1]
}

func (h *MaxHeap) len() int {
	return len(h.array)
}

func (h *MaxHeap) isEmpty() bool {
	return h.len() == 0
}

func parent(index int) int {
	return (index - 1) / 2
}

func left(index int) int {
	return (index * 2) + 1
}

func right(index int) int {
	return (index * 2) + 2
}