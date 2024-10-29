const reqUrl = 'https://gmg.co.id/apimars/wp-json/wp/v2/blogs?acf_format=standard&_fields=id,acf';

async function fetchBlogs() {
    try {
        const response = await fetch(reqUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const blogs = await response.json();
        console.log(blogs);
        
        return blogs; // Mengembalikan data blogs untuk digunakan di file lain
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
}

export default fetchBlogs;