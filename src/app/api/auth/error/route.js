export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const error = searchParams.get('error')
    
    return NextResponse.redirect('/login?error=' + error)
  }