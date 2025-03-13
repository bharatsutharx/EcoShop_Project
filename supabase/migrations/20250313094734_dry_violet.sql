/*
  # Add Sample Data

  1. Initial Data
    - Add sample categories
      - Electronics
      - Home & Kitchen
      - Books
      - Fashion
    
    - Add sample products for each category
      - 3 electronics products
      - 3 home products
      - 3 books
      - 3 fashion items

  2. Notes
    - All products have realistic prices and descriptions
    - Images are from Unsplash
    - Stock levels are set to reasonable amounts
*/

-- Insert Categories
INSERT INTO categories (name, description) VALUES
  ('Electronics', 'Latest gadgets and electronic devices'),
  ('Home & Kitchen', 'Essential items for your home'),
  ('Books', 'Best-selling books and literature'),
  ('Fashion', 'Trendy clothing and accessories')
ON CONFLICT (name) DO NOTHING;

-- Insert Products
WITH category_ids AS (
  SELECT id, name FROM categories
)
INSERT INTO products (name, description, price, image, category_id, stock) VALUES
  -- Electronics
  (
    'Wireless Earbuds Pro',
    'High-quality wireless earbuds with active noise cancellation and 24-hour battery life',
    129.99,
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Electronics'),
    50
  ),
  (
    'Smart Watch Series X',
    'Advanced smartwatch with health monitoring and GPS tracking',
    249.99,
    'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Electronics'),
    35
  ),
  (
    'Premium Bluetooth Speaker',
    'Portable speaker with 360° sound and waterproof design',
    79.99,
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Electronics'),
    45
  ),

  -- Home & Kitchen
  (
    'Ceramic Coffee Set',
    'Modern 6-piece ceramic coffee set with minimalist design',
    59.99,
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Home & Kitchen'),
    25
  ),
  (
    'Bamboo Cutting Board',
    'Eco-friendly bamboo cutting board with juice groove',
    34.99,
    'https://images.unsplash.com/photo-1585671962714-6c5f28c52f88?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Home & Kitchen'),
    60
  ),
  (
    'Modern Table Lamp',
    'Adjustable LED table lamp with wireless charging base',
    89.99,
    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Home & Kitchen'),
    30
  ),

  -- Books
  (
    'The Art of Innovation',
    'Bestselling book on creative thinking and problem-solving',
    24.99,
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Books'),
    100
  ),
  (
    'Cooking Masterclass',
    'Complete guide to professional cooking techniques',
    39.99,
    'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Books'),
    75
  ),
  (
    'Digital Photography',
    'Essential guide to modern digital photography',
    29.99,
    'https://images.unsplash.com/photo-1576872381149-7847515ce5d8?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Books'),
    85
  ),

  -- Fashion
  (
    'Classic Leather Wallet',
    'Handcrafted genuine leather wallet with RFID protection',
    49.99,
    'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Fashion'),
    40
  ),
  (
    'Minimalist Watch',
    'Elegant unisex watch with leather strap',
    159.99,
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Fashion'),
    25
  ),
  (
    'Silk Scarf',
    'Premium silk scarf with modern geometric pattern',
    69.99,
    'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
    (SELECT id FROM category_ids WHERE name = 'Fashion'),
    30
  );