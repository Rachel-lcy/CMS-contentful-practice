import Link from "next/link"
import Image from "next/image"
//abbs: rfc

export default function RecipeCard({recipe}) {
  const {title,slug,cookingTIme, thumbnail} = recipe.fields;
  console.log(recipe.thumbnail);

  const imageUrl = `https:${thumbnail.fields.file.url}`;
  const imageWidth = thumbnail.fields.file.details.image.width;
  const imageHeight = thumbnail.fields.file.details.image.height;
  
  return (
    <div className="card">
      <div className="featured">
       <Image src={imageUrl} width={imageWidth} height={imageHeight} alt={title} priority={false}/>
      </div>

      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Tasks approx {cookingTIme} mins to make</p>
        </div>

        <div className="actions">
          <Link href={'./recipes/' + slug}><a>Details</a></Link>
        </div>
      </div>

      <style jsx> {
        `
        .card {
          transform: rotateZ(0deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background:rgb(179, 142, 144);
          padding: 16px 24px;
          text-decoration: none;
        }
        `
      }

      </style>
    </div>
  )
}
