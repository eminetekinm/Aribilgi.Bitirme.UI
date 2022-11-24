
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Aribilgi.Bitirme.UI.Controllers
{
    public class HomeController : Controller
    {
         
        public IActionResult Index()
        {
            return View();
        }

        
    }
}