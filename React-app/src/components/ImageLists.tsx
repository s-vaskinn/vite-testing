const images = import.meta.glob<{ default: string }>('../assets/london/{*.jpg,*.png,*.svg}', { eager: true })

console.log(images)

export function ImageLists() {
  return (
    <div>
      <h2>Image Lists</h2>
      <p>This is the Image Lists component.</p>
      {Object.values(images).map(
        path => <img src={path.default} 
        key={path.default} 
        width='400' />
      )}
    </div>
  )
}