using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moshEF1
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new MoshEF_DBFirstDemoEntities1();
            var post = new Post()
            {
                Body = "Body1",
                DatePublished = DateTime.Now,
                Title = "Title1",
            };

            var post2 = new Post()
            {
                Body = "Body4",
                DatePublished = DateTime.Now,
                Title = "Title4",
            };

            context.Posts.Add(post);
            context.Posts.Add(post2);


            context.SaveChanges();

        }
    }
}
