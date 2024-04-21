﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLMetadataGeneratorSchema

	/// <exclude/>
	public class MLMetadataGeneratorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLMetadataGeneratorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLMetadataGeneratorSchema(MLMetadataGeneratorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("da1fafd2-deac-4a0e-9d03-510a2ec0d5d6");
			Name = "MLMetadataGenerator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cad98641-0ee5-4173-9c03-6ef86b0857c5");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,27,105,111,219,70,246,179,11,244,63,140,213,34,43,161,6,221,126,181,101,25,142,143,66,129,143,108,236,180,31,22,139,96,76,142,36,38,60,20,14,105,71,235,250,191,239,123,115,144,51,195,33,37,199,206,22,45,22,40,82,113,230,205,187,175,57,156,209,148,241,37,13,25,185,97,69,65,121,62,43,131,227,60,155,197,243,170,160,101,156,103,193,197,249,247,223,61,124,255,221,86,197,227,108,78,174,87,188,100,233,190,243,13,75,146,132,133,8,207,131,95,89,198,138,56,108,193,156,199,217,231,102,240,56,79,211,60,115,191,131,55,220,30,44,88,112,154,149,113,25,51,222,12,95,178,251,18,40,33,175,8,239,96,54,5,129,229,39,175,59,167,206,104,88,230,133,68,13,48,63,20,108,14,18,144,105,86,178,98,6,58,217,35,211,139,243,11,86,210,136,150,84,136,69,1,94,192,238,238,238,146,49,175,210,148,22,171,137,250,86,16,140,19,154,69,228,142,38,113,36,190,46,206,73,154,71,44,33,169,66,69,110,87,132,51,84,24,249,92,177,98,21,104,132,187,6,198,101,117,155,196,33,137,53,51,29,188,108,61,8,126,106,230,1,100,145,71,124,143,188,21,235,229,164,203,173,195,110,185,96,53,111,65,13,191,235,46,24,47,105,65,83,146,129,203,28,12,36,255,131,201,13,172,149,191,131,241,174,0,240,195,47,11,22,177,89,156,177,72,11,33,215,54,227,13,11,189,136,242,170,92,86,37,56,92,149,102,151,48,50,152,224,191,36,159,9,49,228,44,9,197,116,63,162,89,156,36,18,13,159,102,179,124,48,153,102,81,28,10,133,196,51,18,151,132,47,242,42,137,200,45,35,8,10,12,198,0,86,164,34,44,8,189,5,82,132,209,112,161,136,145,130,149,224,75,119,0,55,43,242,84,147,68,166,194,188,40,32,202,114,192,15,78,200,195,5,75,105,64,166,1,11,192,42,12,230,11,54,59,24,92,160,143,92,139,73,201,86,112,76,151,72,107,176,59,217,105,172,216,3,255,142,205,88,193,178,144,201,81,161,157,221,9,97,101,216,214,4,112,91,21,25,159,104,47,136,132,211,166,172,152,163,37,44,119,133,197,26,26,151,27,116,181,41,107,95,210,3,195,107,233,222,210,51,118,8,7,213,128,232,109,39,32,7,100,48,16,210,109,41,24,215,190,18,130,220,230,121,66,28,147,193,212,140,38,156,141,246,55,114,115,51,252,62,98,222,216,208,213,159,224,186,224,34,228,205,245,213,37,145,142,178,137,218,159,163,229,78,181,106,141,252,192,178,72,38,6,241,253,40,243,156,61,168,51,199,113,66,57,228,141,63,47,227,253,235,132,205,104,149,148,175,99,17,40,195,114,181,100,249,108,232,203,123,163,209,191,155,20,25,34,227,62,190,73,87,2,119,147,38,84,60,94,210,172,196,180,89,196,119,32,131,156,95,202,15,8,96,152,215,78,252,62,251,148,229,247,217,13,112,135,190,57,30,147,74,142,144,201,100,176,223,185,236,178,74,177,44,234,101,234,179,103,193,107,240,120,70,107,58,234,179,103,193,9,140,220,196,41,211,43,244,119,207,146,27,246,165,212,224,248,123,224,247,155,90,81,103,49,75,162,46,45,129,10,75,48,71,193,104,148,103,201,138,156,196,162,35,0,235,142,145,134,206,2,19,242,1,45,123,65,151,75,100,225,128,100,236,190,27,246,65,228,134,7,162,156,225,215,42,142,70,59,100,112,158,231,159,170,229,128,60,238,216,243,114,25,64,212,146,185,16,80,80,97,218,180,134,11,17,229,224,87,108,13,208,44,201,233,90,68,44,140,83,154,172,129,194,204,6,32,166,185,93,16,109,73,0,179,140,252,136,96,143,150,121,107,237,139,132,249,33,158,103,208,233,24,46,203,215,88,88,132,66,81,97,99,180,73,19,49,205,160,55,131,184,255,15,230,0,97,201,88,132,82,88,87,100,179,98,181,99,17,235,147,136,223,77,147,113,91,160,193,4,202,53,103,37,41,115,50,14,39,192,60,27,239,134,147,58,42,81,135,156,220,231,217,63,74,2,26,142,16,142,125,9,153,168,173,86,134,86,249,196,195,166,48,18,105,211,174,43,144,242,83,143,190,1,196,107,132,45,149,141,59,45,209,116,114,190,96,19,93,241,202,44,255,228,29,227,121,114,199,204,177,225,63,49,219,202,223,167,95,160,78,112,142,168,89,253,83,58,218,150,17,126,50,130,118,44,2,19,82,82,8,137,163,36,166,156,113,45,44,191,143,75,104,127,134,13,182,160,161,129,98,106,192,173,16,150,17,47,43,8,22,92,231,85,17,50,57,37,104,236,233,133,91,38,23,170,115,2,133,158,65,133,144,99,87,51,37,168,33,146,205,236,190,7,147,82,152,106,220,14,20,226,195,64,245,22,1,226,127,173,120,253,141,38,21,195,70,196,148,179,197,113,77,70,214,112,133,90,13,62,110,166,133,234,86,118,77,123,10,213,90,163,112,189,226,198,16,24,196,249,149,201,17,9,199,45,198,245,18,151,97,159,243,248,214,25,58,42,120,57,132,140,228,229,66,163,95,35,243,89,149,9,25,181,200,16,201,38,85,61,77,98,78,142,230,115,8,12,209,124,11,124,245,28,109,38,244,88,237,120,189,226,121,22,26,14,220,225,70,143,182,218,178,42,73,212,84,36,187,151,189,46,128,71,35,230,157,146,169,170,177,98,210,214,209,95,53,132,253,238,229,130,9,9,215,197,238,95,33,112,28,163,173,15,157,171,66,181,187,47,29,67,54,95,122,86,46,125,9,117,139,14,65,19,243,56,144,152,23,89,211,8,67,129,19,90,47,242,97,207,26,82,45,82,107,88,180,96,198,168,150,202,104,164,246,173,21,178,221,105,193,27,93,85,13,239,4,106,13,107,20,104,39,218,215,104,228,45,118,16,172,100,69,143,86,106,152,224,239,165,26,127,214,107,193,111,156,252,204,12,33,188,213,211,1,212,231,9,97,125,74,160,245,121,71,11,216,14,231,75,86,148,43,181,177,105,23,119,43,250,0,7,57,152,32,170,192,41,248,228,224,192,164,112,40,45,215,200,132,197,106,123,104,81,131,58,133,9,127,68,94,189,178,118,57,193,77,177,130,228,34,16,88,43,118,240,188,67,139,99,44,24,213,14,162,52,106,204,25,26,237,210,247,38,154,246,100,134,255,113,169,105,149,107,225,174,184,195,57,137,103,51,187,202,107,255,213,32,244,156,101,243,114,209,15,196,32,234,202,30,144,62,28,221,97,37,150,30,87,69,193,178,82,111,199,214,240,113,20,69,253,84,204,109,157,69,38,207,66,218,39,2,84,23,105,131,30,152,155,34,78,123,166,223,47,193,29,251,217,211,187,105,155,53,154,48,30,58,162,135,106,212,95,141,156,42,169,129,141,166,195,87,29,59,139,212,218,158,176,131,141,163,118,231,39,248,169,151,245,208,156,242,75,136,112,155,92,44,198,52,45,204,65,16,8,225,39,91,90,72,69,126,45,200,213,193,177,189,164,163,255,196,164,227,65,30,72,182,174,138,211,116,89,174,134,35,242,199,31,126,30,14,204,92,209,217,39,251,57,124,199,150,9,13,89,10,126,255,212,62,217,195,139,229,75,148,59,78,14,195,165,254,80,168,238,23,44,235,206,170,230,130,0,241,9,181,212,41,187,51,209,58,30,210,202,179,47,80,225,172,18,230,217,187,126,203,180,139,254,98,142,91,58,107,237,104,5,16,57,60,84,138,10,132,55,73,213,121,234,112,171,72,201,97,179,62,181,200,31,231,21,180,58,224,134,191,180,42,156,9,38,248,171,55,153,158,138,87,239,171,158,218,84,52,219,142,111,169,118,204,1,207,56,174,176,244,137,218,66,113,201,161,117,246,188,215,217,50,233,46,105,253,129,197,38,202,235,74,150,79,217,144,191,68,227,224,219,174,27,60,180,119,171,206,228,53,80,20,155,48,112,192,189,181,96,71,119,243,245,64,215,85,186,89,183,224,95,126,65,191,172,167,113,17,119,236,236,252,78,253,53,135,26,207,207,112,107,13,235,238,172,173,251,193,218,210,106,155,140,181,226,168,152,87,88,104,176,240,12,241,232,23,15,247,37,180,98,91,108,107,154,155,78,40,128,121,41,171,159,112,71,169,30,111,96,143,176,225,55,131,163,70,18,8,44,86,37,149,196,76,105,46,104,70,231,172,32,140,167,184,189,144,76,191,231,172,128,102,45,99,74,229,109,248,253,38,49,56,172,113,117,9,114,30,243,114,236,101,126,66,30,52,161,150,92,170,210,6,178,85,84,74,10,222,228,49,244,82,82,205,195,143,240,129,50,227,255,91,8,70,193,239,11,86,176,161,79,149,35,39,31,185,140,43,210,55,121,227,0,67,23,8,9,187,99,65,83,104,220,153,134,141,29,189,155,246,32,4,221,139,83,218,169,186,109,120,189,18,71,180,61,216,70,125,25,239,46,143,35,114,180,92,38,171,183,173,187,212,161,239,42,86,95,108,246,92,109,155,21,120,187,61,109,186,218,239,139,184,100,215,248,12,103,232,214,84,179,244,189,185,186,253,136,81,19,86,188,204,83,68,132,27,33,9,81,22,171,58,249,89,211,224,91,106,29,158,65,112,220,126,250,110,139,145,8,52,93,34,211,158,234,219,145,154,23,244,218,20,84,10,126,12,248,126,28,28,11,18,205,245,238,2,140,121,95,228,160,7,121,241,189,71,30,78,179,187,24,70,48,134,131,75,118,127,14,4,31,31,218,180,31,7,42,9,149,139,34,191,23,97,112,38,80,212,76,12,21,225,145,219,87,216,114,90,141,141,122,37,50,144,173,11,114,47,7,26,237,214,215,238,87,242,197,8,104,9,159,4,156,48,136,99,121,161,53,54,236,46,129,38,67,137,5,252,253,90,88,125,56,122,18,83,113,6,139,185,193,84,3,60,21,83,13,123,34,21,24,12,136,249,137,90,32,129,129,101,119,189,138,228,50,255,196,68,148,108,139,95,178,153,26,99,190,156,12,213,5,218,96,52,82,209,165,115,4,120,96,138,107,250,212,32,185,16,160,166,14,70,240,129,12,235,100,217,40,215,225,84,126,62,69,101,226,114,206,175,50,113,162,198,61,22,149,19,107,44,42,129,38,67,23,95,135,109,123,210,198,5,190,153,217,48,89,116,152,149,86,101,94,191,8,81,174,96,52,146,177,214,162,163,215,166,162,228,218,137,29,183,110,32,216,23,32,13,98,77,193,118,226,78,82,58,140,99,124,97,89,145,45,85,102,127,159,97,4,246,0,159,196,28,54,133,43,153,97,29,63,64,227,42,206,182,15,212,193,152,50,150,197,78,112,20,69,58,180,4,162,253,53,64,38,81,211,155,80,80,26,69,177,40,69,137,22,213,163,93,21,40,56,51,183,102,64,46,73,123,219,38,14,197,181,164,80,81,61,75,2,163,186,108,41,77,1,175,239,104,54,7,10,54,55,125,53,104,122,154,97,243,136,93,146,199,69,32,36,196,160,228,223,121,95,245,140,238,90,87,118,251,134,66,89,90,95,144,78,68,94,118,153,210,182,84,175,180,212,150,209,62,136,80,15,241,228,150,3,54,48,234,187,213,187,194,110,198,4,85,18,245,30,155,72,120,167,163,149,206,224,85,179,8,86,209,91,154,55,241,238,75,181,190,248,53,99,178,169,134,131,99,138,79,11,208,49,240,109,96,72,147,100,69,34,60,234,79,161,208,137,3,5,172,138,70,195,57,228,35,40,144,63,63,6,100,64,126,34,158,66,73,126,146,242,15,72,243,78,76,188,155,130,101,191,232,138,41,250,10,207,131,3,171,104,171,71,16,211,142,12,162,226,32,86,174,47,179,66,224,59,41,114,171,133,189,66,132,128,91,5,144,65,139,190,218,252,79,200,207,205,193,83,83,246,127,83,207,199,154,194,175,60,74,246,3,186,13,208,29,151,232,112,135,80,25,224,63,139,202,72,247,141,122,63,1,161,115,253,57,193,35,76,172,85,214,157,188,47,183,11,63,57,179,95,26,174,73,235,47,22,141,78,24,130,228,167,52,92,24,113,104,246,99,200,146,245,78,242,37,35,80,169,169,245,200,212,36,235,241,39,231,240,214,227,38,232,88,14,235,166,195,88,232,213,185,199,171,87,110,93,59,236,68,85,59,86,7,159,102,93,212,135,148,29,116,27,92,102,43,174,23,53,39,60,53,17,223,35,3,111,150,242,203,171,223,251,186,103,185,94,153,52,112,125,193,37,135,15,245,120,91,66,139,217,237,70,181,230,56,144,150,47,235,236,211,97,147,174,231,145,177,195,131,11,34,141,101,199,157,149,161,215,191,128,250,186,183,236,248,234,180,126,110,250,117,143,218,213,250,151,122,218,190,246,125,240,255,95,186,55,54,254,211,95,186,235,247,128,223,232,193,251,115,94,188,171,208,124,82,145,241,60,112,225,230,147,22,107,35,225,52,124,106,151,252,64,20,131,46,207,59,68,223,182,27,23,7,228,209,69,92,167,74,183,208,137,7,119,130,207,161,139,186,181,153,176,83,88,157,165,244,222,188,175,103,52,17,120,115,114,179,143,72,27,131,57,186,168,77,169,8,215,205,85,125,134,215,222,50,235,166,164,62,109,144,156,72,154,146,116,215,241,83,211,102,116,158,220,136,125,79,123,151,211,207,146,179,163,208,158,219,110,167,183,252,93,162,240,4,48,194,96,26,13,154,222,79,113,100,111,138,27,17,124,59,221,198,190,142,183,215,166,117,187,49,227,244,205,199,181,105,202,118,195,175,151,164,109,29,138,108,160,250,80,232,216,15,228,223,68,200,63,19,91,97,31,57,198,191,39,176,128,38,186,221,181,215,202,67,108,33,160,98,188,139,174,218,128,233,81,179,46,254,157,254,158,229,41,185,116,237,145,106,95,55,222,29,175,218,82,207,8,180,30,99,109,240,167,54,48,246,95,126,240,139,216,112,57,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("da1fafd2-deac-4a0e-9d03-510a2ec0d5d6"));
		}

		#endregion

	}

	#endregion

}
