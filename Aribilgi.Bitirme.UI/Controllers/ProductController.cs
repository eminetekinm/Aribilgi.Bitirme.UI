using Microsoft.AspNetCore.Mvc;

namespace Aribilgi.Bitirme.UI.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
