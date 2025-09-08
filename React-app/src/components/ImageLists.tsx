const images = import.meta.glob('../assets/london/{*.jpg,*.png,*.svg}', { eager: true })

console.log(images)

export function ImageLists() {
  return (
    <div>
      <h2>Image Lists</h2>
      <p>This is the Image Lists component.</p>
    </div>
  )
}