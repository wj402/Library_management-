'use client'

export default async function RentalBtn( {result2} ) {

  return (
    <div>
      <form method="POST" action="/api/management/rental">
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}