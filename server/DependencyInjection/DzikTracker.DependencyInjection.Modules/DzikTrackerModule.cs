using DzikTracker.Contract.Repositories;
using DzikTracker.DB.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using Microsoft.Extensions.Configuration;

namespace DzikTracker.DependencyInjection.Modules
{
    public class DzikTrackerModule
    {
        public void ConfigureDI(IServiceCollection services, IConfiguration configuration )
        {
            services.AddSingleton<IDzikDataRepository, DzikDataRepository>(x => new DzikDataRepository(configuration.GetConnectionString("DzikConnection")));
        }

    }
}
