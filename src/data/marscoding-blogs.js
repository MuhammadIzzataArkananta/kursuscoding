const fetchBlogs = [];

const getBlogs = async () => {
    const reqUrl = 'https://gmg.co.id/apimars/wp-json/wp/v2/blogs?acf_format=standard&_fields=id,slug,acf';
    
    try {
        const response = await fetch(reqUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const blogs = await response.json();
        fetchBlogs.push(...blogs);
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
    }
};

await getBlogs();

export default fetchBlogs;