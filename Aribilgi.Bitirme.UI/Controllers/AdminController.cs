using Microsoft.AspNetCore.Mvc;

namespace Aribilgi.Bitirme.UI.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
