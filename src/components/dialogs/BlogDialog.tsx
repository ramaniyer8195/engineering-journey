import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProjectItem } from "@/interfaces/jsonTypes";
import { BsDot } from "react-icons/bs";

const BlogDialog = ({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectItem;
}) => {
  const publishedBlogs = project.blogs.filter(
    (blog) => blog.published === true
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-2xl">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">Blogs</DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <div className="flex flex-col gap-2">
              {publishedBlogs.map((blog) => (
                <ul key={blog.title}>
                  <li className="flex items-center gap-2">
                    <BsDot className="text-primary" />
                    <div className="flex justify-between w-[90%]">
                      <span className="capitalize">{blog.title}</span>
                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-display hover:underline text-sm"
                      >
                        View Blog
                      </a>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDialog;
