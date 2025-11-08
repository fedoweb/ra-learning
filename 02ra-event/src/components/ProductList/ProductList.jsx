import { useState } from "react";

const products = ['apple', 'paneapple', 'mellow', 'strawberry', 'lemon']

function ProductList() {
  const [query, setQuery] = useState('');
  const filtered = products.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="seach"
      />

      <ul>
        { filtered.map((item, i) => <li key={i}>{item}</li>) }
      </ul>
    </div>
  );
}

export default ProductList;